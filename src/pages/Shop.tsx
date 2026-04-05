import { useState } from "react";
import { Search, SlidersHorizontal, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catMen from "@/assets/cat-men.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import heroNew from "@/assets/hero-new.jpg";

const allProducts = [
  { id: 1, name: "Robe Ankara Florale", price: 18500, boutique: "Atelier Sira", image: product1, category: "femmes", badge: "Nouveau", size: "M" },
  { id: 2, name: "Chemise Wax Homme", price: 12000, boutique: "Faso Couture", image: product2, category: "hommes", size: "L" },
  { id: 3, name: "Kaftan Bogolan", price: 25000, boutique: "Ouaga Style", image: product3, category: "femmes", badge: "Tendance", size: "S" },
  { id: 4, name: "Veste Motifs Africains", price: 35000, boutique: "Mode BF", image: product4, category: "hommes", size: "XL" },
  { id: 5, name: "Ensemble Wax Femme", price: 22000, boutique: "Atelier Sira", image: catWomen, category: "femmes", badge: "Promo", size: "M" },
  { id: 6, name: "Polo Moderne Homme", price: 9500, boutique: "Faso Couture", image: catMen, category: "hommes", size: "L" },
  { id: 7, name: "Sac en Cuir Artisanal", price: 15000, boutique: "Mode BF", image: catAccessories, category: "accessoires", size: "Unique" },
  { id: 8, name: "Robe de Soirée Dorée", price: 45000, boutique: "Ouaga Style", image: heroNew, category: "femmes", badge: "Nouveau", size: "S" },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recent");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = allProducts
    .filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.id - a.id;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">Marketplace</h1>
            <p className="font-body text-muted-foreground">Découvrez les créations des meilleurs artisans du Burkina Faso</p>
          </div>

          {/* Filters bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 rounded-lg"
              />
            </div>
            <div className="flex gap-3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[160px] rounded-lg">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="femmes">Femmes</SelectItem>
                  <SelectItem value="hommes">Hommes</SelectItem>
                  <SelectItem value="accessoires">Accessoires</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[160px] rounded-lg">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récent</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="rounded-lg md:hidden" onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Active filters */}
          {category !== "all" && (
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary" className="gap-1 cursor-pointer rounded-lg" onClick={() => setCategory("all")}>
                {category} <X className="h-3 w-3" />
              </Badge>
            </div>
          )}

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] rounded-lg bg-muted mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                      {product.badge}
                    </Badge>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-3.5 w-3.5 text-foreground" />
                  </button>
                </div>
                <p className="font-body text-xs text-primary tracking-wider uppercase mb-0.5 font-medium">{product.boutique}</p>
                <h3 className="font-body text-sm font-medium text-foreground mb-1 line-clamp-1">{product.name}</h3>
                <p className="font-heading text-sm font-bold text-foreground">{product.price.toLocaleString()} FCFA</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-muted-foreground">Aucun produit trouvé</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
