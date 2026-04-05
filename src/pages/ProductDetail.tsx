import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Store, ChevronLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const productsData = [
  { id: 1, name: "Robe Ankara Florale", price: 18500, boutique: "Atelier Sira", boutiqueId: 1, image: product1, description: "Magnifique robe en tissu Ankara avec des motifs floraux vibrants. Coupe moderne et élégante, parfaite pour toutes les occasions.", material: "100% Coton Wax", origin: "Ouagadougou, BF", sizes: ["S", "M", "L", "XL"], rating: 4.8, reviews: 24 },
  { id: 2, name: "Chemise Wax Homme", price: 12000, boutique: "Faso Couture", boutiqueId: 2, image: product2, description: "Chemise moderne en tissu wax pour homme. Coupe ajustée avec des finitions soignées.", material: "Coton Wax", origin: "Bobo-Dioulasso, BF", sizes: ["M", "L", "XL"], rating: 4.6, reviews: 18 },
  { id: 3, name: "Kaftan Bogolan", price: 25000, boutique: "Ouaga Style", boutiqueId: 3, image: product3, description: "Kaftan traditionnel revisité avec des motifs bogolan authentiques. Confort et élégance au quotidien.", material: "Bogolan artisanal", origin: "Ouagadougou, BF", sizes: ["S", "M", "L"], rating: 4.9, reviews: 42 },
  { id: 4, name: "Veste Motifs Africains", price: 35000, boutique: "Mode BF", boutiqueId: 4, image: product4, description: "Veste avec motifs africains uniques. Parfaite pour un look moderne avec une touche culturelle.", material: "Coton et polyester", origin: "Koudougou, BF", sizes: ["M", "L", "XL", "XXL"], rating: 4.5, reviews: 15 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id)) || productsData[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link to="/shop" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ChevronLeft className="h-4 w-4" /> Retour à la boutique
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-muted aspect-[3/4]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                <Heart className="h-5 w-5 text-foreground" />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Link to={`/seller/${product.boutiqueId}`} className="font-body text-sm text-primary font-medium hover:underline flex items-center gap-1">
                  <Store className="h-3.5 w-3.5" /> {product.boutique}
                </Link>
              </div>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span className="font-body text-sm font-medium">{product.rating}</span>
                </div>
                <span className="font-body text-sm text-muted-foreground">({product.reviews} avis)</span>
              </div>

              <p className="font-heading text-3xl font-bold text-foreground mb-6">{product.price.toLocaleString()} FCFA</p>

              <p className="font-body text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

              {/* Size selector */}
              <div className="mb-6">
                <p className="font-body text-sm font-medium text-foreground mb-3">Taille</p>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg font-body text-sm font-medium border transition-colors ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-card text-foreground border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-body text-sm font-medium text-foreground mb-3">Quantité</p>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-lg" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-body text-lg font-medium w-10 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" className="rounded-lg" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1 py-6 font-heading text-sm tracking-wider uppercase font-semibold rounded-lg">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Ajouter au panier
                </Button>
              </div>

              {/* Details */}
              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Matière</span>
                  <span className="font-medium text-foreground">{product.material}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Origine</span>
                  <span className="font-medium text-foreground">{product.origin}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
