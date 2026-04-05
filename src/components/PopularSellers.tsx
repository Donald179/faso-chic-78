import entrepreneur1 from "@/assets/entrepreneur-1.jpg";
import entrepreneur2 from "@/assets/entrepreneur-2.jpg";
import { Star, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const sellers = [
  { id: 1, name: "Atelier Sira", owner: "Sira Ouédraogo", location: "Ouagadougou", rating: 4.8, products: 45, image: entrepreneur1, top: true },
  { id: 2, name: "Faso Couture", owner: "Ibrahim Traoré", location: "Bobo-Dioulasso", rating: 4.6, products: 32, image: entrepreneur2, top: false },
  { id: 3, name: "Ouaga Style", owner: "Aminata Compaoré", location: "Ouagadougou", rating: 4.9, products: 67, image: entrepreneur1, top: true },
  { id: 4, name: "Mode BF", owner: "Moussa Kaboré", location: "Koudougou", rating: 4.5, products: 28, image: entrepreneur2, top: false },
];

const PopularSellers = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Vendeurs populaires
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground">
            Découvrez nos créateurs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller) => (
            <Link
              key={seller.id}
              to={`/seller/${seller.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={seller.image}
                  alt={seller.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {seller.top && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                    ⭐ Top vendeur
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Store className="h-4 w-4 text-primary" />
                  <h3 className="font-heading text-base font-semibold text-foreground">{seller.name}</h3>
                </div>
                <p className="font-body text-xs text-muted-foreground mb-3">{seller.location}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                    <span className="font-body text-sm font-medium text-foreground">{seller.rating}</span>
                  </div>
                  <span className="font-body text-xs text-muted-foreground">{seller.products} produits</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSellers;
