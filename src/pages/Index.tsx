import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsGrid from "@/components/CollectionsGrid";
import TrendingProducts from "@/components/TrendingProducts";
import PopularSellers from "@/components/PopularSellers";
import WhyUs from "@/components/WhyUs";
import EntrepreneursDuFaso from "@/components/EntrepreneursDuFaso";
import SellerCTA from "@/components/SellerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CollectionsGrid />
      <TrendingProducts />
      <PopularSellers />
      <WhyUs />
      <EntrepreneursDuFaso />
      <SellerCTA />
      <Footer />
    </div>
  );
};

export default Index;
