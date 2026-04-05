import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsGrid from "@/components/CollectionsGrid";
import TrendingProducts from "@/components/TrendingProducts";
import SellerCTA from "@/components/SellerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CollectionsGrid />
      <TrendingProducts />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Index;
