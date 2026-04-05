import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  boutique: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  { id: 1, name: "Robe Ankara Florale", price: "18 500 FCFA", boutique: "Atelier Sira", image: product1, badge: "Nouveau" },
  { id: 2, name: "Chemise Wax Homme", price: "12 000 FCFA", boutique: "Faso Couture", image: product2 },
  { id: 3, name: "Kaftan Bogolan", price: "25 000 FCFA", boutique: "Ouaga Style", image: product3, badge: "Tendance" },
  { id: 4, name: "Veste Motifs Africains", price: "35 000 FCFA", boutique: "Mode BF", image: product4 },
];

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="group cursor-pointer">
    <div className="relative overflow-hidden aspect-[3/4] rounded-lg bg-muted mb-4">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={512}
        height={680}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {product.badge && (
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium">
          {product.badge}
        </Badge>
      )}
      <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
        <Heart className="h-4 w-4 text-foreground" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full py-2.5 bg-card/90 backdrop-blur-sm text-foreground font-body text-xs tracking-wider uppercase rounded-lg hover:bg-card transition-colors font-medium">
          Voir le produit
        </button>
      </div>
    </div>
    <div>
      <p className="font-body text-xs text-primary tracking-wider uppercase mb-1 font-medium">{product.boutique}</p>
      <h3 className="font-body text-sm font-medium text-foreground mb-1">{product.name}</h3>
      <p className="font-heading text-sm font-bold text-foreground">{product.price}</p>
    </div>
  </Link>
);

const TrendingProducts = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
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
          <Link to="/shop" className="hidden md:block font-body text-sm tracking-wider uppercase text-primary hover:text-primary/80 transition-colors border-b-2 border-primary pb-1 font-medium">
            Voir tout
          </Link>
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
