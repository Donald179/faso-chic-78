import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Package, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import entrepreneur1 from "@/assets/entrepreneur-1.jpg";
import entrepreneur2 from "@/assets/entrepreneur-2.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import heroNew from "@/assets/hero-new.jpg";

const sellersData = [
  { id: 1, name: "Atelier Sira", owner: "Sira Ouédraogo", location: "Ouagadougou", description: "Créatrice passionnée de mode féminine. Chaque pièce est confectionnée avec amour et savoir-faire traditionnel.", rating: 4.8, products: 45, followers: 1200, avatar: entrepreneur1, banner: heroNew },
  { id: 2, name: "Faso Couture", owner: "Ibrahim Traoré", location: "Bobo-Dioulasso", description: "Spécialiste de la mode masculine moderne avec une touche africaine unique.", rating: 4.6, products: 32, followers: 890, avatar: entrepreneur2, banner: heroNew },
  { id: 3, name: "Ouaga Style", owner: "Aminata Compaoré", location: "Ouagadougou", description: "Collections exclusives mêlant tradition et modernité pour femmes exigeantes.", rating: 4.9, products: 67, followers: 2100, avatar: entrepreneur1, banner: heroNew },
  { id: 4, name: "Mode BF", owner: "Moussa Kaboré", location: "Koudougou", description: "Mode unisexe et accessoires artisanaux du Burkina Faso.", rating: 4.5, products: 28, followers: 650, avatar: entrepreneur2, banner: heroNew },
];

const sellerProducts = [
  { id: 1, name: "Robe Ankara Florale", price: 18500, image: product1, badge: "Nouveau" },
  { id: 2, name: "Top Wax Moderne", price: 8500, image: product2 },
  { id: 3, name: "Kaftan Bogolan", price: 25000, image: product3, badge: "Tendance" },
  { id: 4, name: "Ensemble Chic", price: 32000, image: product4 },
];

const SellerProfile = () => {
  const { id } = useParams();
  const seller = sellersData.find((s) => s.id === Number(id)) || sellersData[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        {/* Banner */}
        <div className="relative h-48 lg:h-64 overflow-hidden">
          <img src={seller.banner} alt="Bannière" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/40" />
        </div>

        {/* Profile info */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative -mt-16 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
              <img src={seller.avatar} alt={seller.name} className="w-28 h-28 rounded-xl border-4 border-card object-cover shadow-lg" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">{seller.name}</h1>
                  <Badge className="bg-accent text-accent-foreground text-xs">⭐ Top vendeur</Badge>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-3">{seller.description}</p>
                <div className="flex flex-wrap gap-4 font-body text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {seller.location}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-accent fill-accent" /> {seller.rating}</span>
                  <span className="flex items-center gap-1"><Package className="h-3.5 w-3.5" /> {seller.products} produits</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {seller.followers} followers</span>
                </div>
              </div>
              <Button className="rounded-lg font-heading font-semibold text-sm">Suivre la boutique</Button>
            </div>
          </div>

          {/* Products */}
          <div className="pb-20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">Produits</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {sellerProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[3/4] rounded-lg bg-muted mb-3">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">{product.badge}</Badge>
                    )}
                  </div>
                  <h3 className="font-body text-sm font-medium text-foreground mb-1">{product.name}</h3>
                  <p className="font-heading text-sm font-bold text-foreground">{product.price.toLocaleString()} FCFA</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerProfile;
